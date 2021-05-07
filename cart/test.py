courseTime = "10:10am - 11:00am"
courseTime = courseTime.split(" ")
Time = "11:20am - 2:20pm"
Time = Time.split(" ")
del courseTime[1]
del Time[1]
# changing time to int and adding 12 hoursr if PM
for i in range(len(courseTime)):
    courseTime[i] = courseTime[i].replace(":","")
    Time[i] = Time[i].replace(":","")
    if "am" in courseTime[i]:
        courseTime[i] = int (courseTime[i][0:courseTime[i].find('am')])
    else:
        courseTime[i] = int (courseTime[i][0:courseTime[i].find('pm')]) + 1200
    if "am" in Time[i]:
        Time[i] = int (Time[i][0:Time[i].find('am')])
    else:
        Time[i] = int (Time[i][0:Time[i].find('pm')]) + 1200
print(courseTime)
print(Time)
if (courseTime[1] > Time[0] and courseTime[0] < Time[1]  ):
    print('false')
