def partition(arr, low, high):
    pivot = arr[high]  # Choose the last element as the pivot
    i = low - 1  # Index of smaller element

    for j in range(low, high):
        if arr[j] <= pivot:  # Use <= to handle duplicates correctly
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quicksort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quicksort(arr, low, pi - 1)  # Sort the left part
        quicksort(arr, pi + 1, high)  # Sort the right part

# Sample array
arr = [12, 2, 3, 13, 18, 4, 5, 7]

low = 0
high = len(arr) - 1

quicksort(arr, low, high)

print("Sorted array:", arr)
