# define _CRT_SECURE_NO_WARNINGS 1
# include <stdio.h>
# include <math.h>
int is_prime(unsigned int n)
{
	for(int i=2;i<=n;i++)
	{
		if(n%i==0)
			return 0;
	}
	return 1;
}