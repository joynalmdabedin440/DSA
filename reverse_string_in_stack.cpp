 

#include <bits/stdc++.h>
using namespace std;
#include <stack>






int main()
{
    string s = "jhgkhhgh";
    stack<char> st ;
    for(int i=0;i<s.length();i++){
        st.push(s[i]);
    }
    
    s="";
    
    
    for(;!st.empty();){
         s += st.top();
        st.pop();
    }
    
//     while (!st.empty()) {
//         s += st.top();
//         st.pop();
//   }
  
  std::cout <<  s;
    
    
    

    return 0;
}


