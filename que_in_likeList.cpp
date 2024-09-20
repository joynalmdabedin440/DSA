
// Assignment with que in linkelist
// stack and que problem

#include <stdio.h>


struct Node {
    int value;
    struct Node* next;
};

struct Node* front = NULL;
struct Node* rear = NULL;

void enQueue(int data) {
	struct Node* temp;
   temp = new Node;
// Check if memory(heap) is full.
   if (!temp){
    cout << "\n Heap Overflow";
     exit(1);
 }
    temp->value = data;
     rear->next = temp;
     temp->next = NULL;
     rear = temp;
}


 int deQueue(){
      struct Node* temp;
       int data;
     if (front == NULL) {
        cout << "\n Queue underflow";
         exit(1);
   }
    else {
      data = front->value
      temp = front;
       front = front->next;
        free(temp);
        return data;
}

}

void displayQueue() {
    struct Node* current = front;
    if (current == NULL) {
        cout << "Queue is empty" << endl;
        return;
    }
    cout << "Queue elements: ";
    while (current != NULL) {
        cout << current->value << " ";
        current = current->next;
    }
    cout << endl;
}


int main()
{
    enQueue(10);
    enQueue(20);
    enQueue(30);
    
    displayQueue(); // Display elements in the queue
    
    cout << "Dequeued element: " << deQueue() << endl; // Remove and display an element from the queue
    
    displayQueue(); 

    return 0;
}


