import numpy as np
from sklearn.decomposition import PCA
from sklearn.preprocessing import LabelEncoder
import pandas as pd
import matplotlib.pyplot as plt


import os

HOUSING_PATH = 'Train_dataset.xlsx'

dat = pd.read_excel(HOUSING_PATH)
dat.head()


dat["Region"] = dat["Region"].astype('category').cat.codes
dat["Gender"] = dat["Gender"].astype('category').cat.codes
dat["Designation"] = dat["Designation"].astype('category').cat.codes
dat["Married"] = dat["Married"].astype('category').cat.codes
dat["Mode_transport"] = dat["Mode_transport"].astype('category').cat.codes
dat["Occupation"] = dat["Occupation"].astype('category').cat.codes
dat["Married"] = dat["Married"].astype('category').cat.codes
dat["comorbidity"] = dat["comorbidity"].astype('category').cat.codes
dat["Pulmonary score"] = dat["Pulmonary score"].astype('category').cat.codes
dat["cardiological pressure"] = dat["cardiological pressure"].astype('category').cat.codes



dat=dat.drop(["Name","Insurance", "salary", "people_ID"],  axis=1)
dat.shape



dat['Children']=dat['Children'].fillna(int(np.mean(dat['Children'])))
dat['Diuresis']=dat['Diuresis'].fillna(int(np.mean(dat['Diuresis'])))
dat['d-dimer']=dat['d-dimer'].fillna(int(np.mean(dat['d-dimer'])))
dat['Heart rate']=dat['Heart rate'].fillna(int(np.mean(dat['Heart rate'])))
dat['Platelets']=dat['Platelets'].fillna(int(np.mean(dat['Platelets'])))
dat['HDL cholesterol']=dat['HDL cholesterol'].fillna(int(np.mean(dat['HDL cholesterol'])))
dat['HBB']=dat['HBB'].fillna(int(np.mean(dat['HBB'])))
dat['FT/month']=dat['FT/month'].fillna(int(np.mean(dat['FT/month'])))
dat['comorbidity'].fillna('ffill', inplace=True)
dat['cardiological pressure'].fillna('ffill', inplace=True)



y_train= dat.iloc[:,-1]
x_train= dat.iloc[:,9:].drop(["Infect_Prob"], axis=1)



from sklearn import preprocessing
sclr = preprocessing.StandardScaler()
x_scaled = sclr.fit_transform(x_train)
dat_x_train = pd.DataFrame(x_scaled)


y_train.values
criteria = [y_train.between(0, 33), y_train.between(33, 66), y_train.between(66, 100)]
values = ['Low', 'Mid', 'High']
y_categories = np.select(criteria, values, 0)
dat['y_category']=y_categories
dat['y_category']=dat['y_category'].astype('category').cat.codes
dat


# Generating correlation matrix
dat_corr= dat.drop(['y_category'], axis=1)
dat_med=dat_corr[dat_corr.columns[-14:]]
cm=dat_corr.corr(method='kendall')
cm_med=dat_med.corr()


# Visualising correlation matrix
import seaborn as sn
import matplotlib.pyplot as plt
fig, ax = plt.subplots(figsize=(20,20)) 
sn.heatmap(cm, annot=True)


X=dat.drop(["Infect_Prob"],  axis=1)
y=dat["y_category"]


from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X,y, test_size=0.20, random_state=101)


X_train.shape
# X_test.shape


from sklearn.metrics import accuracy_score
from sklearn.tree import DecisionTreeClassifier

clf = DecisionTreeClassifier()
clf = clf.fit(X_train,y_train)
y_pred = clf.predict(X_test)
print(accuracy_score(y_pred, y_test))




from sklearn.ensemble import RandomForestClassifier
forest=RandomForestClassifier(n_estimators=100)
forest.fit(X_train,y_train)
y_pred=forest.predict(X_test)
print(accuracy_score(y_pred, y_test))



from sklearn.linear_model import LogisticRegression
logreg = LogisticRegression()
logreg.fit(X_train,y_train)
y_pred=logreg.predict(X_test)
print(accuracy_score(y_pred, y_test))


import numpy as np
import matplotlib.pyplot as plt
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC
from sklearn.datasets import load_digits
from sklearn.model_selection import learning_curve
from sklearn.model_selection import ShuffleSplit


def plot_learning_curve(estimator, title, X, y, axes=None, ylim=None, cv=None,
                        n_jobs=None, train_sizes=np.linspace(.1, 1.0, 5)):
    if axes is None:
        _, axes = plt.subplots(1, 3, figsize=(20, 5))

    axes[0].set_title(title)
    if ylim is not None:
        axes[0].set_ylim(*ylim)
    axes[0].set_xlabel("Training examples")
    axes[0].set_ylabel("Accuracy")

    train_sizes, train_scores, test_scores, fit_times, _ =         learning_curve(estimator, X, y, cv=cv, n_jobs=n_jobs,
                       train_sizes=train_sizes,
                       return_times=True)
    train_scores_mean = np.mean(train_scores, axis=1)
    train_scores_std = np.std(train_scores, axis=1)
    test_scores_mean = np.mean(test_scores, axis=1)
    test_scores_std = np.std(test_scores, axis=1)
    fit_times_mean = np.mean(fit_times, axis=1)
    fit_times_std = np.std(fit_times, axis=1)

    # Plot learning curve
    axes[0].grid()
    axes[0].fill_between(train_sizes, train_scores_mean - train_scores_std,
                         train_scores_mean + train_scores_std, alpha=0.1,
                         color="r")
    axes[0].fill_between(train_sizes, test_scores_mean - test_scores_std,
                         test_scores_mean + test_scores_std, alpha=0.1,
                         color="g")
    axes[0].plot(train_sizes, train_scores_mean, 'o-', color="r",
                 label="Train Accuracy")
    axes[0].plot(train_sizes, test_scores_mean, 'o-', color="g",
                 label="Test Accuracy")
    axes[0].legend(loc="best")

    # Plot n_samples vs fit_times
    axes[1].grid()
    axes[1].plot(train_sizes, fit_times_mean, 'o-')
    axes[1].fill_between(train_sizes, fit_times_mean - fit_times_std,
                         fit_times_mean + fit_times_std, alpha=0.1)
    axes[1].set_xlabel("Training examples")
    axes[1].set_ylabel("Training Time(seconds)")
    axes[1].set_title("Scalability of the model")

    # Plot fit_time vs score
    axes[2].grid()
    axes[2].plot(fit_times_mean, test_scores_mean, 'o-')
    axes[2].fill_between(fit_times_mean, test_scores_mean - test_scores_std,
                         test_scores_mean + test_scores_std, alpha=0.1)
    axes[2].set_xlabel("Training Time(seconds)")
    axes[2].set_ylabel("Accuracy")
    axes[2].set_title("Performance of the model")

    return plt


fig, axes = plt.subplots(3, 2, figsize=(10, 15))


title = "Random Forest"
cv = ShuffleSplit(n_splits=100, test_size=0.2, random_state=0)

estimator = RandomForestClassifier(n_estimators=100)
plot_learning_curve(estimator, title, X_train, y_train, axes=axes[:, 0], ylim=(0.95, 1.01),
                    cv=cv, n_jobs=4)

title = "Logistic Regression"
cv = ShuffleSplit(n_splits=10, test_size=0.2, random_state=0)
estimator = LogisticRegression()
plot_learning_curve(estimator, title, X_train, y_train, axes=axes[:, 1], ylim=(0.95, 1.01),
                    cv=cv, n_jobs=4)

plt.show()


from sklearn.metrics import plot_confusion_matrix
from sklearn.metrics import precision_recall_fscore_support
class_names=['']
titles_options = [("Confusion matrix, without normalization", None),
                  ("Normalized confusion matrix", 'true')]

disp = plot_confusion_matrix(logreg, X_test, y_test.reshape(-1,1),display_labels=['Low','Mid','High'],cmap=plt.cm.Blues, normalize='true')
disp.ax_.set_title("Confusion Matrix for Logistic Regression")
plt.show()
precision_recall_fscore_support(y_test, logreg.predict(X_test), average='macro')


import pickle

pkl_filename = "forest.pkl"
with open(pkl_filename, 'wb') as file:
    pickle.dump(forest, file)

# Load from file
with open(pkl_filename, 'rb') as file:
    pickle_model = pickle.load(file)
    
# Calculate the accuracy score and predict target values
score = pickle_model.score(X_test, y_test)
print("Test score: {0:.2f} %".format(100 * score))
Ypredict = pickle_model.predict(X_test)


from sklearn.metrics import plot_confusion_matrix
class_names=['']
titles_options = [("Confusion matrix, without normalization", None),
                  ("Normalized confusion matrix", 'true')]

disp = plot_confusion_matrix(forest, X_test, y_test.reshape(-1,1),display_labels=['Low','Mid','High'],cmap=plt.cm.Blues, normalize='true')
disp.ax_.set_title("Confusion Matrix for Random Forest")
plt.show()
