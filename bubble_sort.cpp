
#include<iostream>
using namespace std;

int main(){
    int i,j,temp,n;
    std::cout << "enter array size: ";
    std::cin >> n;
    
    int arr[n];
    
    std::cout << "Enter array element:" << std::endl;
    for(i=0;i<n;i++){
        std::cin >> arr[i];
    }
    
    for(i=0;i<n;i++){
        for(j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    
    for(i=0;i<n;i++){
        std::cout << arr[i]<<" ";
    }
    return 0;
}
