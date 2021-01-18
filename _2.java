import java.util.ArrayList;
import java.util.Random;

public class _2 {
    public static void main(String[] args) {
        Random rand = new Random();
        ArrayList<Integer> test_datas = new ArrayList<Integer>();

        for (int i = 0; i < 50; i++){
            test_datas.add(rand.nextInt(50));
        }

        ArrayList<Integer> fin = numbers(test_datas);
        System.out.println(fin);

    }

    public static ArrayList<Integer> numbers(ArrayList<Integer> nums){
        ArrayList<Integer> result = new ArrayList<Integer>();

        firs:
        for (int i = 0; i < nums.size(); i++){
            second:
            for (int j = i + 1; j < nums.size(); j++){
                if(result.contains(nums.get(j))) {
                    continue second;
                }
                if(nums.get(j) == nums.get(i)){
                    result.add(nums.get(i));
                    break second;
                }
            }
        }

        return result;
    }
}
