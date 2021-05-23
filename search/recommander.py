import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from scipy.sparse.linalg import svds
import csv
import matplotlib
import matplotlib.pyplot as plt
from sklearn.preprocessing import normalize

"""Disclaimer: large chunk of the codes are reused from my CS4300 projects. I have made changes to avoid code leaks and AI violation"""

def build_vectorizer(max_n_terms=5000, max_prop_docs=0.8, min_n_docs=1):
    return TfidfVectorizer(max_df=max_prop_docs, min_df=min_n_docs, max_features=max_n_terms, stop_words='english', ngram_range=(1, 2))

data = csv.DictReader(open("class.csv", mode='r', encoding='utf-8-sig'))
tfidf_vectorizer = build_vectorizer()
course_term_tfidf_matrix = tfidf_vectorizer.fit_transform([d['description'] for d in data]).toarray()
index_to_vocab = {i:v for i, v in enumerate(tfidf_vectorizer.get_feature_names())}

course_name_to_index = {d['title']: d['number'] for d in data}
course_index_to_index = {d['title']: d['number'] for d in data}
num_courses = len(course_name_to_index)

def get_cos_sim(course1: str, course2: str, tfidf_mat:np.ndarray, course_name_to_index=course_name_to_index):
    """Returns the cosine similarity of two course descriptions. """
    idx_course1 = course_name_to_index[course1]
    idx_course2 = course_name_to_index[course2]
    vec1 = tfidf_mat[idx_course1]
    vec2 = tfidf_mat[idx_course2]
    return np.dot(vec1, vec2)/(np.linalg.norm(vec1)*np.linalg.norm(vec2))

def build_course_sims_cos(tfidf_mat:np.ndarray):
    """Returns a matrix of size num_courses x num_courses where entry [i,j] is the cosine similarity between course i and course j"""
    Anorm = tfidf_mat / np.linalg.norm(tfidf_mat, axis=-1)[:, np.newaxis]
    matrix = np.matmul(Anorm, Anorm.T)
    return matrix

course_sims_cos = build_course_sims_cos(num_courses, tfidf_mat)

def get_ranked_courses(course: str, sim_matrix: np.ndarray):
    """
    Return sorted rankings (most to least similar) of courses as a list of (course name, similarity score) tuples.
    Courses with the same score are sorted according to how these courses were ordered in the original data.
    """
    course_idx = course_name_to_index[course]
    score_lst = sim_matrix[course_idx]
    course_score_lst = [(course_index_to_name[i], s) for i,s in enumerate(score_lst)]
    course_score_lst = course_score_lst[:course_idx] + course_score_lst[course_idx+1:] # don't account for the course itself
    course_score_lst = sorted(course_score_lst, key=lambda x: -x[1])
    return course_score_lst

def print_top(query: str, sim_matrix: np.ndarray, k=10): # TODO: instead of printing, render in Angular frontend
    """Print the k most and least similar courses to a query course, given a similarity matrix"""
    course_score_lst = get_ranked_courses(query, sim_matrix)
    
    print("Top {} most similar courses to {}".format(k, query))
    print("======")
    for (course, score) in course_score_lst[:k]:
        print("%.3f %s" % (score, course))

query = "The Computing Technology Inside Your Smartphone" # TODO: placeholder for user input
print_top(query, course_sims_cos)
