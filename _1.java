import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class _1 {
    int alma;

    public static void main(String[] args) {
        Random random = new Random();
        int random_number = random.nextInt(10000000);

        ArrayList<Byte> fin = giveMeThechars(random_number);
        System.out.println(random_number);
        System.out.println(fin.toString());
    }

    static ArrayList<Byte> giveMeThechars(int number){

        int marker = number / 10 * 10;
        int i = 0;
        ArrayList<Byte> result = new ArrayList<Byte>();

        do {
            result.add((byte) (number - marker));
            number = marker / 10;
            marker = number / 10 * 10;
            i++;

        }while (number != 0);

        Collections.reverse(result);
        return  result;
    }

}
