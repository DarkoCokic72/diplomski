from util.load_file import load_file

def load_collaborative_sim_options():
    df = load_file(f"collaborative_test.csv")
    return df