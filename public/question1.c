#include <stdio.h>

int my_sum(int* ,int);

int main(){
	int ary[5] = {1,2,3,4,5};
	int sum = 0;
	int i;

	sum = my_sum(ary,sizeof(ary) / sizeof(int));

	for(i=0;i<5;i++){
		printf("%d ",ary[i]);
	}

	printf("\n");

	printf("sum = %d\n",sum);	

	return 0;
}

int my_sum(int* ary,int size){
	int sum = 0;
	int i;
	
	for(i=0;i<size;i++){
		sum += *(ary + i);
	}

	return sum;
}