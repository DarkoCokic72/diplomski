from test import get_movies_metadata_df
import numpy as np

import matplotlib.pyplot as plt

movies_metadata = get_movies_metadata_df()
# adults = movies_metadata["adult"]
#
# unique, counts = np.unique(adults, return_counts=True)
# counts_sum = np.sum(counts)
#
# others = [x for x in unique if x not in ["True", "False"]]
# others_counts = np.sum(counts[:3])
#
# unique = ["Others", "False", "True"]
# counts = [others_counts, counts[-2], counts[-1]]
# counts_percentage = [x / counts_sum for x in counts]
#
# fig, ax = plt.subplots()
#
# ax.bar(unique, counts_percentage)
# bar_container = ax.bar(unique, counts_percentage)
# ax.set(ylabel='percentage', title='Percentage of contents in "adult" column')
# ax.bar_label(bar_container, fmt=lambda x: f"{x * 100: .2f}%")
#
# plt.show()
# fig.clf()
# print()
#
# fig, ax = plt.subplots()
#
# ax.bar(unique, counts_percentage)
# bar_container = ax.bar(unique, counts)
# ax.set(ylabel='number of contents', title='Number of unique contents in "adult" column')
# ax.bar_label(bar_container)
#
# plt.show()
# plt.clf()
# video = movies_metadata["video"]
# unique, counts = np.unique(video, return_counts=True)
#
# nan_count = 0
# false_count = 0
# true_count = 0
#
# for i, val in enumerate(unique):
#     if val is True:
#         true_count += counts[i]
#     elif val is False:
#         false_count += counts[i]
#     else:
#         nan_count += counts[i]
#
# unique = ["False", "True", "Unknown"]
# counts = [false_count, true_count, nan_count]
# sum_counts = false_count + true_count + nan_count
# counts_percentage = [x/sum_counts for x in counts]
#
# fig, ax = plt.subplots()
#
# bar_container = ax.bar(unique, counts)
# ax.set(ylabel='number of contents', title='Number of unique contents in "video" column')
# ax.bar_label(bar_container)
#
# plt.show()
# plt.close(fig)
#
# fig, ax = plt.subplots()
#
# bar_container = ax.bar(unique, counts_percentage)
# ax.set(ylabel='percentage', title='Percentage of contents in "video" column')
# ax.bar_label(bar_container, fmt=lambda x: f"{x * 100: .2f}%")
#
# plt.show()
# plt.close(fig)
#
# collection = movies_metadata["belongs_to_collection"]
#
# vals = [type(x) == str for x in collection]
# unique, counts = np.unique(vals, return_counts=True)
# counts_sum = np.sum(counts)
# counts_percentage = [x/counts_sum for x in counts]
#
# fig, ax = plt.subplots()
#
# bar_container = ax.bar(["No", "Yes"], counts)
# ax.set(ylabel='number of contents', title='Number of unique contents in "Belongs to collection" column')
# ax.bar_label(bar_container)
# plt.show()
# plt.close(fig)
#
# fig, ax = plt.subplots()
#
# bar_container = ax.bar(["No", "Yes"], counts_percentage)
# ax.set(ylabel='percentage', title='Percentage of contents in "Belongs to collection" column')
# ax.bar_label(bar_container, fmt=lambda x: f"{x * 100: .2f}%")
# plt.show()
# plt.close(fig)

homepages = movies_metadata["homepage"]
print(homepages.head(n=10))
print(homepages.tail(n=10))

vals = [type(x) == str for x in homepages]
unique, counts = np.unique(vals, return_counts=True)
counts_sum = np.sum(counts)
counts_percentage = [x/counts_sum for x in counts]

fig, ax = plt.subplots()
bar_colors = ["#ff4444", "#4444ff"]
bar_container = ax.bar(["No", "Yes"], counts, color=bar_colors)
ax.set(ylabel='number of contents', title='Number of unique contents in "Homepage" column')
ax.bar_label(bar_container)
plt.show()
plt.close(fig)

fig, ax = plt.subplots()
bar_colors = ["#ff4444", "#4444ff"]
bar_container = ax.bar(["No", "Yes"], counts_percentage, color=bar_colors)
ax.set(ylabel='percentage', title='Percentage of contents in "Homepage" column')
ax.bar_label(bar_container, fmt=lambda x: f"{x * 100: .2f}%")
plt.show()
plt.close(fig)


print()
