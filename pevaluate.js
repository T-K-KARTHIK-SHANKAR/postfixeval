function pevaluate()
{
var n1=document.querySelector("#input").value;
var stack=[];
for(var i=0;i<n1.length;i++)
{
if(n1[i]!='+' && n1[i]!='-' && n1[i]!='*' && n1[i]!='/' && n1[i]!='^')
stack.push(n1[i]);
else
{
var op2=parseInt(stack.pop());
var op1=parseInt(stack.pop());
var value;
if(n1[i]=='+')
	value=op1+op2;
else if(n1[i]=='-')
	value=op1-op2;
else if(n1[i]=='*')
	value=op1*op2;
else if(n1[i]=='/')
	value=op1/op2;
else if(n1[i]=='^')
	value=op1**op2;

stack.push(value);
}
}
var result=stack.pop();
document.querySelector("#op").innerHTML=result;
}