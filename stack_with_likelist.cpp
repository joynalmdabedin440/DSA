#include <iostream>
using namespace std;

struct Node{
    int value;
    struct Node* next;
    
};


struct Node* top;
void push(int data){
    struct Node* temp;
    temp = new Node();
    
    if(!temp){
        std::cout << "|n Heap overflow" << std::endl;
        exit(1);
        
    }
    
    temp->value=data;
    temp->next=top;
    top=temp;
}


void pop()
  {

	Node *temp = top;
	top = top->next;
	delete temp;
  }
  

 void display ()
  {
	Node *temp = top;
	while (temp != nullptr)
	  {
		cout << temp->value << " ";
		temp = temp->next;
	  }

	cout << endl;
  }




int main()
{
    Node *x=new Node;
    int value=40;
    push(value);
    push(56);
    push(78);
    push(70);
    
    display();
    pop();
    display();

    return 0;
}
