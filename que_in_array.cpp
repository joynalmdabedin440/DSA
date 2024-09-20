

#include <iostream>
#include <string>
using namespace std;

int myQ[5];
int rear=-1;
int front=-1;

void enQueue(int data) {
	if(front == -1 && rear == -1) {
		 // queue is empty
		front = rear = 0;
		myQ[rear]=data;
	}
// 	else if((rear+1) % Qsize == front) // check queue is full
//      printf("Queue is overflow");
	else {
		rear=rear+1; // rear is incremented
		myQ[rear] = data; // assign a value
	}
}

int deQueue() {
	int y;
	if((front == -1) && (rear ==-1))
		printf("\n Queue is underflow..");
		
    else if(front == rear) {
	y = myQ[front]; 
	front = rear = -1;
}
  else {
   y = myQ[front];
   front = front+1;
}
 return y;
}


void display(){
    for(int i=front;i<=rear;i++){
        std::cout << myQ[i] <<" ";
    }
}



int main()
{
   enQueue(566);
   enQueue(566);
   enQueue(5667);
   enQueue(5660);
   display();
   
   deQueue();
   std::cout <<"\n";
   display();
  
   
   

    return 0;
}



