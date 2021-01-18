import java.util.ArrayList;

public class union {
    public static void main(String[] args) {
        System.out.println(uni_rendezett(
            new int[] {-1, 0, 2, 5, 9},
            new int[] { 0, 2, 4, 5, 6, 7, 9}
        ));

        System.out.println(uni_nemrendezett(
            new int[] {-1, 0, 2, 5, 9},
            new int[] { 0, 2, 4, 5, 6, 7, 9}
        ));
    }
    public static ArrayList < Integer > uni_rendezett(int[] a, int[] b) {
        ArrayList < Integer > result = new ArrayList < Integer > ();
        int aSize = a.length;
        int bSize = b.length;

        for (int i = 0, j = 0; (i < aSize) || (j < bSize);) {
            if (aSize-1 < i) {
                for (int k = j; k < bSize; k++) {
                    result.add(b[k]);
                }
                break;
            }

            if (bSize-1 < j) {
                for (int k = i; k < aSize; k++) {
                    result.add(a[k]);
                }
                break;
            }

            if (a[i] == b[j]) {
                result.add(a[i]);
                j++;
                i++;
                continue;
            }

            if (a[i] < b[j]) {
                result.add(a[i]);
                i++;
                continue;
            }

            if (b[j] < a[i]) {
                result.add(b[j]);
                j++;
                continue;
            }
        }
        return result;
    }

    public static ArrayList < Integer > uni_nemrendezett(int[] a, int[] b) {
        ArrayList < Integer > result = new ArrayList < Integer > ();
        int[] biggerList = a.length > b.length ? a : b;
        int[] smallerList = a.length > b.length ? b : a;

        for (int i = 0; i < biggerList.length; i++) {
            result.add(biggerList[i]);
        }

        for (int i = 0; i < smallerList.length; i++) {
            if (!(result.contains(smallerList[i]))) {
                result.add(smallerList[i]);
            }
        }


        return result;
    }
}
