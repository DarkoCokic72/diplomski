import matplotlib.pyplot as plt
from pandas import DataFrame
import numpy as np

from util.load_file import load_file

def analyze_results(is_user_based: bool, sim_name: str):
    results: DataFrame = load_file(f"collaborative_results.csv", sep='\t')
    is_user_based_query: str = f"is_user_based == {is_user_based}"
    sim_name_query: str = f'sim_name == "{sim_name}"'

    is_user_based_results = results.query(is_user_based_query)
    sim_metric_results = is_user_based_results.query(sim_name_query)

    algo_list = np.unique(np.array(is_user_based_results["algo_name"].tolist())).tolist()

    algos = tuple(algo_list)
    metrics_values = {
        "rmse": sim_metric_results["rmse"],
        "mae": sim_metric_results["mae"],
        "mse": sim_metric_results["mse"],
        "fcp": sim_metric_results["fcp"],
    }

    x = np.arange(len(algos))
    width = 0.20
    multiplier = 0

    fig, ax = plt.subplots(layout='constrained')

    for attribute, measurement in metrics_values.items():
        offset = width * multiplier
        rects = ax.bar(x + offset, measurement, width, label=attribute)
        ax.bar_label(rects, padding=4)
        multiplier += 1

    is_user_based_title: str = "user-based recommendation" if is_user_based == True else "item-based recommendation"
    plot_title: str = f"Results for {is_user_based_title} using {str.capitalize(sim_name)} similarity"
    plot_filename: str = f"./collaborative {is_user_based_title} {sim_name} similarity.png".replace(' ', '_')


    ax.set_ylabel("value")
    ax.set_title(plot_title)
    ax.set_xticks(x + width, algos)
    ax.legend(loc='upper left', ncols=4)
    ax.set_ylim(0, 1.2)

    fig.set_size_inches(15, 8)
    fig.dpi = 100
    plt.savefig(plot_filename)

    fig.clear()
    plt.close()
    pass




def main():
    test_cases: DataFrame = load_file(f"./collaborative_analyze_results.csv", sep=',')
    for i, test_case in test_cases.iterrows():
        is_user_based = test_case["is_user_based"]
        sim_name = test_case["sim_name"]
        analyze_results(is_user_based, sim_name)

if __name__=='__main__':
    main()
