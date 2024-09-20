
//Insert First, Insert middle, search, delete middle 
#include <iostream>
using namespace std;

struct node
{
  int data;
  struct node *next;
};

struct single_link_list
{
  node *head;
    single_link_list ()
  {
	head = new node;
	head = nullptr;
	//head->next = nullptr;
  }




  //insert in First
  void insertFirst (int val)
  {

	node *temp = new node;
	temp->data = val;
	temp->next = head;
	head = temp;

  }

  //Insert in middle
  int insert_middle (int val, int index)
  {

	node *temp = new node;
	temp->data = val;

	node *prev = head;
	int current_index = 1;
	while (prev != nullptr && current_index < index)
	  {
		prev = prev->next;
		current_index++;
	  }

	temp->next = prev->next;
	prev->next = temp;
	return 0;
  }

  //insert in last
  node *prev = head;
  void insertion_last (int val)
  {
	node *temp = new node;
	temp->data = val;
	node *prev = head;

	while (prev->next != nullptr)
	  {
		prev = prev->next;
	  }

	prev->next = temp;
	temp->next = nullptr;

  }



  // delete First element
  void delete_first ()
  {

	node *temp = head;
	head = head->next;
	delete temp;
  }
  
  
//   int insert_middle (int val, int index)
//   {

// 	node *temp = new node;
// 	temp->data = val;

// 	node *prev = head;
// 	int current_index = 1;
// 	while (prev != nullptr && current_index < index)
// 	  {
// 		prev = prev->next;
// 		current_index++;
// 	  }

// 
	
// 	return 0;
//   }
  
  
  
  //delete in middle element
  
  int delete_middle(int val, int index){
   
     node *prev = head;
     int c_index = 1;
     
     while(prev != nullptr && c_index<index){
         
         prev = prev->next;
         c_index++;
         
         
     }
     
     prev->next =prev->next->next;
     //prev->next = temp;
     
     return 0;
      
  }



  // search element
  bool search (int val)
  {
	node *temp = head;
	while (temp != nullptr)
	  {
		if (temp->data == val)
		  {
			return true;
		  }
		temp = temp->next;
	  }
	return false;
  }

  // display output
  void display ()
  {
	node *temp = head;
	while (temp != nullptr)
	  {
		cout << temp->data << " ";
		temp = temp->next;
	  }

	cout << endl;
  }



};


int
main ()
{
  single_link_list link_list;

  node *y = new node;
  int val = 50;
  link_list.insertFirst (val);
  int val1 = 501;
  link_list.insertFirst (val1);

  link_list.insert_middle (1000, 2);
  

  int val2 = 500;
  link_list.insertion_last (val2);
  
  link_list.display ();
  
  
  link_list.delete_middle (1000, 2);
  link_list.delete_first ();
  link_list.display ();



  int searchVal = 50;
  if (link_list.search (searchVal) == true)
	{
	  std::cout << "The search value is found" << std::endl;
	}

  else
	{
	  std::cout << "Not found" << std::endl;
	}




  return 0;
}


 //insertion in middle assignment
//delete in first element


