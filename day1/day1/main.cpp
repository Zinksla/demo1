# define _CRT_SECURE_NO_WARNINGS 1
# include <stdio.h>
# include "tools.h"
int main()
{
	for(int i=2;i<=100;i++)
	{
		is_prime(i);
		if(is_prime(i)==1)
			printf("%d",i);
	}
}