import java.util.ArrayList;

public class _5 {
    public static void main(String[] args) {
//        Random rand = new Random();
        int[] arr = {8, 7, 3, 1, 6};

//        for (int i = 0; i < arr.length; i++){
//            arr[i] = rand.nextInt(9);
//        }
        String str = "[";

        for (int elem : arr){
            str += String.valueOf(elem) + ",";
        }
        str += "]";

        System.out.println(str);
        System.out.println(give_me_number(arr));


    }

    public static ArrayList<Integer> give_me_number(int[] numbers) {
        boolean marker = true;
        ArrayList<Integer> result = new ArrayList<Integer>();

        for (int i = 0; i < numbers.length; i++ ){
            for (int j = i + 1; j < numbers.length; j++ ){
                if((numbers[j] <= numbers[i]) || (i == numbers.length -1) ){
                    marker = false;
                    break;
                }

            }

            if (marker){
                result.add(numbers[i]);
            }
            marker = true;
        }

        return result;
    }
}
