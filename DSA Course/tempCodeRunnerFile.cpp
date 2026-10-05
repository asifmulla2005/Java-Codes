//Sum of all odd numbers from 1 to N
#include<iostream>
using namespace std;

int main()
{
    int n = 50;
    int oddSum = 0;
    
    for(int i =1; i<=n; i++)
    {
        if(i%2 != 0)
        {
            oddSum += 1;
        }
    }
    cout<<"Odd sum = "<<oddSum<<endl;
    return 0;
}