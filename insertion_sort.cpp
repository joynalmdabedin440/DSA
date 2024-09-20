
#include <iostream>

int main()
{
  
    int i,j,item,n;
    std::cout << "enter array size: ";
    std::cin >> n;
    
    int arr[n];
    
    std::cout << "Enter array element:" << std::endl;
    for(i=0;i<n;i++){
        std::cin >> arr[i];
    }
    
    for(i=1;i<n;i++){
        item=arr[i];
        j=i-1;
        while(j>=0 && arr[j]>item){
            arr[j+1]=arr[j];
            j=j-1;
        }
        
        arr[j+1]=item;
    }
    
     for(i=0;i<n;i++){
        std::cout<< arr[i]<<" ";
    }

    return 0;
}
