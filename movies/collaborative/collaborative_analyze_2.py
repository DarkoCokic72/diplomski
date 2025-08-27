from util.load_ratings import load_ratings
import numpy as np

ratings  = load_ratings()

user_ids = np.array(ratings["userId"])
_, counts =  np.unique(user_ids, return_counts=True)

print(f"Average number of movies rated by user: {np.average(counts, axis=0): .3f}")
print(f"Median number of movies rated by user: {np.median(counts, axis=0): .3f}")

print(f"Least number of movies rated by user: {np.min(counts)}")
print(f"Most number of movies rated by user: {np.max(counts)}")

disc = {
    "less than 70": len([x for x in counts if x < 70]),
    "70-100": len([x for x in counts if 70 <= x < 100]),
    "100-500": len([x for x in counts if 100 <= x < 500]),
    "500-1000": len([x for x in counts if 500 <= x < 1000]),
    "over 1000": len([x for x in counts if x >= 1000]),
}
print(disc)