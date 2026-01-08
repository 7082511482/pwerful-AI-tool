const problems = {

basic: {
"Hello World": `#include <stdio.h>
int main() {
    printf("Hello World");
    return 0;
}`,

"Read and print integer": `#include <stdio.h>
int main() {
    int n;
    scanf("%d",&n);
    printf("%d",n);
    return 0;
}`,

"Add two numbers": `#include <stdio.h>
int main() {
    int a,b;
    scanf("%d%d",&a,&b);
    printf("%d",a+b);
    return 0;
}`
},

operators: {
"Simple Calculator": `#include <stdio.h>
int main() {
    int a,b;
    char op;
    scanf("%d %c %d",&a,&op,&b);
    switch(op){
        case '+': printf("%d",a+b); break;
        case '-': printf("%d",a-b); break;
        case '*': printf("%d",a*b); break;
        case '/': printf("%d",a/b); break;
        case '%': printf("%d",a%b); break;
    }
    return 0;
}`,

"Celsius to Fahrenheit": `#include <stdio.h>
int main() {
    float c,f;
    scanf("%f",&c);
    f = (c*9/5)+32;
    printf("%f",f);
    return 0;
}`
},

condition: {
"Even or Odd": `#include <stdio.h>
int main() {
    int n;
    scanf("%d",&n);
    if(n%2==0) printf("Even");
    else printf("Odd");
    return 0;
}`,

"Leap Year": `#include <stdio.h>
int main() {
    int y;
    scanf("%d",&y);
    if((y%4==0 && y%100!=0) || y%400==0)
        printf("Leap Year");
    else
        printf("Not Leap Year");
    return 0;
}`
},

loops: {
"Factorial": `#include <stdio.h>
int main() {
    int n,f=1;
    scanf("%d",&n);
    for(int i=1;i<=n;i++)
        f*=i;
    printf("%d",f);
    return 0;
}`,

"Prime Number": `#include <stdio.h>
int main() {
    int n,i,flag=0;
    scanf("%d",&n);
    for(i=2;i<=n/2;i++)
        if(n%i==0) flag=1;
    if(flag==0 && n>1) printf("Prime");
    else printf("Not Prime");
    return 0;
}`
},

array: {
"Sum of array": `#include <stdio.h>
int main() {
    int a[100],n,sum=0;
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        scanf("%d",&a[i]);
        sum+=a[i];
    }
    printf("%d",sum);
    return 0;
}`
},

string: {
"Reverse string": `#include <stdio.h>
#include <string.h>
int main() {
    char s[100];
    gets(s);
    strrev(s);
    puts(s);
    return 0;
}`
},

function: {
"Recursive factorial": `#include <stdio.h>
int fact(int n){
    if(n==0) return 1;
    return n*fact(n-1);
}
int main(){
    int n;
    scanf("%d",&n);
    printf("%d",fact(n));
}`
}

};

function loadProblems() {
    let cat = document.getElementById("category").value;
    let p = document.getElementById("problem");
    p.innerHTML = "<option>Select Problem</option>";

    if (problems[cat]) {
        for (let key in problems[cat]) {
            let opt = document.createElement("option");
            opt.textContent = key;
            opt.value = key;
            p.appendChild(opt);
        }
    }
}

function solve() {
    let cat = document.getElementById("category").value;
    let prob = document.getElementById("problem").value;
    document.getElementById("output").textContent =
        problems[cat][prob] || "Problem not found";
}
