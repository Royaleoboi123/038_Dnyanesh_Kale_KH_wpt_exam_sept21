import java.util.*;

class MorningActivity1{
	
	//Display Method
	public static void display(int[] arr, int size){
		System.out.println("----------------------------------------------------\n");
		for(int i = 0; i < size; i++){
			System.out.print(arr[i]+" => ");
			}
		System.out.println("\n\n----------------------------------------------------");
			
		}
		
	//Linear Search
	public static int findElement(int[] arr, int size, int key){
		int count = 0;
		for(int i = 0; i < size; i++){
			count++;
			if(arr[i] == key){
				System.out.println("Iteration : "+count);
				return i;
				}
			}
			return -1;
		}
	
	//Insert Element at position.
	public static void insertElement(int[] arr, int position, int newElement){
		System.out.println(arr.length);
		for(int i = (arr.length-2); i >= (position-1); i--){
				arr[i+1] = arr[i]; 
			}
		arr[position-1] = newElement;
	}
			
	//Delete Element
	public static int deleteElement(int[] arr, int size, int indexOfElement){
			
		for( int i = indexOfElement; i < size -1; i++){
				arr[i] = arr[i+1];
				}
		return size - 1;
	}
		
		
	//Main method.	
	public static void main(String[] args){
		Scanner sc  = new Scanner(System.in);
		int size = 6;
		
		int[] arr = new int[size+1];
		arr[0] = 10;
		arr[1] = 20;
		arr[2] = 30;
		arr[3] = 40;
		arr[4] = 50;
		arr[5] = 60;
		
		System.out.println("1.Find an Element.\n2.Insert Element \n3.Delete Element.");
		int choice = sc.nextInt();
		
		switch(choice){
		
			case 1: System.out.println("Enter the element you want to find :");	
					int key = sc.nextInt();
					int isThereElement = findElement( arr, size, key);
					if(isThereElement == -1)
						System.out.println("Element not present in the array");
					else
						System.out.println("Element present at index : "+isThereElement);
					display(arr, size);
					break;
			
			case 2: display(arr, size);
					System.out.println("Enter the element you want to insert :");
					int newElement = sc.nextInt();
					System.out.println("Enter the position you want to insert the element :");
					int position = sc.nextInt();
					insertElement( arr, position, newElement);
					display(arr, size+1);
					break;
					
			case 3: display(arr, size);
					System.out.println("Enter Array element you want to delete: ");
					int Element = sc.nextInt();
					int indexOfElement = findElement(arr, size, Element);
					if(indexOfElement == -1)
						System.out.println("Element not present in the array");
					else{
						size = deleteElement(arr, size, indexOfElement);
						}
					display(arr, size);
					break;
				}
		}
}