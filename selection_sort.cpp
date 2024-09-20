
#include <iostream>

using namespace std;

int
main ()
{
  int size,min_index,i,j,temp;
  std::cout << "enter the array size" << std::endl;
  std::cin >> size;
  int arr[size];

  int n;
  std::cout << "enter Array element" << std::endl;
  for (int i = 0; i < size; i++)
	{

	  std::cin >> arr[i];


	}

    for(i=0;i<size-1;i++){
        min_index=i;
        for(j=i+1;j<size;j++){
            if(arr[min_index]>arr[j]){
                min_index=j;
            }
        }
        
        if(min_index!=i){
            temp=arr[i];
            arr[i]=arr[min_index];
            arr[min_index]=temp;
        }
    }

 
  

  for (int i = 0; i < size; i++)
	{
	  std::cout << arr[i]<<",";
	}

  return 0;
}

