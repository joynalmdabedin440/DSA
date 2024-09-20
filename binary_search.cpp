
#include <iostream>

using namespace std;

int
main ()
{

  int n;
  std::cout << "enter the array size" << std::endl;
  std::cin >> n;
  int arr[n];


  std::cout << "enter Array element" << std::endl;
  for (int i = 0; i < n; i++)
	{

	  std::cin >> arr[i];


	}

  int a;
  std::cout << "enter your desire number: ";
  cin >> a;

  int low = 0;
  int high = n - 1;
  int p = 0;
  while (low <= high)
	{

	  int mid = (low + high) / 2;

	  if (a == arr[mid])
		{
		  std::cout << "match" << std::endl;
		  p = 1;
		  break;
		}

	  if (a > arr[mid])
		{

		  low = mid + 1;
		}
	  else
		{
		  high = mid - 1;
		}

	}


    if(p=0){
     std::cout << "not found" << std::endl;
     }
   
  return 0;
}

