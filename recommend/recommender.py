import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from scipy.sparse.linalg import svds
import csv
import matplotlib
import matplotlib.pyplot as plt
from sklearn.preprocessing import normalize

"""Disclaimer: some codes are reused from my CS4300 projects but I have made changes to avoid code leaks and AI violation"""

def build_vectorizer(max_n_terms=5000, max_prop_docs=0.8, min_n_docs=1):
    return TfidfVectorizer(max_df=max_prop_docs, min_df=min_n_docs, max_features=max_n_terms, stop_words='english', ngram_range=(1, 2))

data = csv.DictReader(open("class.csv", mode='r', encoding='utf-8-sig'))
tfidf_vectorizer = build_vectorizer()
course_term_tfidf_matrix = tfidf_vectorizer.fit_transform([d['description'] for d in data]).toarray()
index_to_vocab = {i:v for i, v in enumerate(tfidf_vectorizer.get_feature_names())}

data = csv.DictReader(open("class.csv", mode='r', encoding='utf-8-sig'))
course_title_to_index = {d['title']: int(d['index']) for d in data}
data = csv.DictReader(open("class.csv", mode='r', encoding='utf-8-sig'))
course_index_to_title = {int(d['index']): d['title'] for d in data}

def get_cos_sim(course1: str, course2: str, tfidf_mat=course_term_tfidf_matrix, course_title_to_index=course_title_to_index):
    """Returns the cosine similarity of two course descriptions. """
    idx_course1 = course_title_to_index[course1]
    idx_course2 = course_title_to_index[course2]
    vec1 = tfidf_mat[idx_course1]
    vec2 = tfidf_mat[idx_course2]
    return np.dot(vec1, vec2)/(np.linalg.norm(vec1)*np.linalg.norm(vec2))

def build_course_sims_cos(tfidf_mat:np.ndarray):
    """Returns a matrix of size num_courses x num_courses where entry [i,j] is the cosine similarity between course i and course j"""
    Anorm = tfidf_mat / np.linalg.norm(tfidf_mat, axis=-1)[:, np.newaxis]
    matrix = np.matmul(Anorm, Anorm.T)
    return matrix

def get_ranked_courses(course: str, sim_matrix: np.ndarray):
    """
    Return sorted rankings (most to least similar) of courses as a list of (course name, similarity score) tuples.
    Courses with the same score are sorted according to how these courses were ordered in the original data.
    """
    course_idx = course_title_to_index[course]
    score_lst = sim_matrix[int(course_idx)]
    course_score_lst = [(course_index_to_title[i], s) for i,s in enumerate(score_lst)]
    course_score_lst = course_score_lst[:course_idx] + course_score_lst[course_idx+1:] # don't account for the course itself
    course_score_lst = sorted(course_score_lst, key=lambda x: -x[1])
    return course_score_lst

def get_top(query: str, sim_matrix: np.ndarray, k=7): # TODO: render in Angular frontend
    """Print the k most and least similar courses to a query course, given a similarity matrix"""
    course_score_lst = get_ranked_courses(query, sim_matrix)
    
    # print("Top {} most similar courses to {}".format(k, query))
    # print("======")
    course_and_score = [course + ' ' + str(score) for (course, score) in course_score_lst[:k]]
    top_course_with_scores = '; '.join(course_and_score)
    return top_course_with_scores
    # for (course, score) in course_score_lst[:k]:
    #     print("%.3f %s" % (score, course))


query1 = "The Computing Technology Inside Your Smartphone" # TODO: placeholder for user input
# query2 = "Introduction to Circuits for Electrical and Computer Engineers"
# test1 = get_cos_sim(query1, query1, course_term_tfidf_matrix)
# print(test1)
# test2 = get_cos_sim(query1, query2, course_term_tfidf_matrix)
# print(test2)
course_sims_cos = build_course_sims_cos(course_term_tfidf_matrix)
# print(course_sims_cos)
# print(course_sims_cos[0])
# result = get_top(query1, course_sims_cos)
# print(result)
num_courses = len(course_index_to_title)
csv_file = open("recommand.csv", "w", encoding='utf-8')
csv_writer = csv.writer(csv_file)
csv_writer.writerow(['index', 'title', 'recommandation'])
for i in range(num_courses):
    title = course_index_to_title[i]
    result = get_top(title, course_sims_cos)
    csv_writer.writerow([i, title, result])

csv_file.close()