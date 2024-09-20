
#include <iostream>
using namespace std;

int top=-1;
int arr[5];


void push(int x){
    if(top>=4){
        std::cout << "stack is overflow" << std::endl;
    }
    else{
        top++;
        arr[top]=x;
    }
}

int pop(){
    int y;
    if(top<=-1){
        std::cout << "stack is underflow" << std::endl;
    }
    else{
        y=arr[top];
        top--;
        return y;
    }
}

void display(){
    for(int i=0;i<top+1;i++){
        cout<<arr[i]<<" ";
    }
}

int main()
{
    
 
    push(50);
    push(5000);
    push(500);
    push(5);
    display();
    pop();
    pop();
    cout<<"\n";
    display();

    return 0;
}