
#include <iostream>

using namespace std;

int main ()
{

  int x;
  int size;
  std::cout << "enter array size" << std::endl;
  std::cin >> size;

  int arr[size];

  std::cout << "enter arry element" << std::endl;
  for (int i = 0; i < size; i++)
	{
	  std::cin >> x;
	  arr[i] = x;
	}

  int n;
  std::cout << "enter your desire number:" << std::endl;
  std::cin >> n;
  int p = 0;
  for (int i = 0; i < size; i++)
	{

	  if (n == arr[i])
		{
		  std::cout << "The number is found:" << i << std::endl;
		  p = 1;

		}


	}

  if (p == 0)
	{
	  std::cout << "not found" << std::endl;
	}


  return 0;
}

