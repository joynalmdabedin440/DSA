def mergeSort(arr):
    if len(arr) < 2:
        return
    
    mid = len(arr) // 2
    
    left = arr[:mid]
    right = arr[mid:]
    
    mergeSort(left)
    mergeSort(right)
    
    merge(arr, left, right)
    
def merge(arr, left, right):
    left_len = len(left)
    right_len = len(right)
    
    i = j = k = 0
    
    while i < left_len and j < right_len:
        if left[i] < right[j]:
            arr[k] = left[i]
            i += 1
        else:
            arr[k] = right[j]
            j += 1
        k += 1
    
    while i < left_len:
        arr[k] = left[i]
        i += 1
        k += 1
    
    while j < right_len:
        arr[k] = right[j]
        j += 1
        k += 1

arr = [34, 5, 2, 78, 345, 23, 90, 1, 5, 7]
mergeSort(arr)
print(arr)
