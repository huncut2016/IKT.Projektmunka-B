import java.util.ArrayList;


public class engraving {
    public static void main (String[] args) {

    }

    public static ArrayList<Integer> rendezettTomb_metszet (int[] a, int[] b) {
        ArrayList<Integer> result = new ArrayList<Integer>();
        int aSize = a.length;
        int bSize = b.length;

        for(int i = 0, j = 0; i < aSize && j < bSize ;){
            if(aSize-1 < i || bSize-1 < j){
                return result;
            }

            if(a[i] == b[j]){
                result.add(a[i]);
                j++;
                i++;
                continue;
            }

            if(a[i] < b[j]){
                i++;
                continue;
            }

            if(b[j] < a[i]) {
                j++;
                continue;
            }
        }
        return result;
    }

    public static ArrayList<Integer> rendezetlenTomb_metszet (int[] a, int[] b) {
        ArrayList<Integer> result = new ArrayList<Integer>();


        for(int i = 0; i < (a.length > b.length ? b.length : a.length) ;i++){
            for(int j = 0; j < b.length; j++){
                if(a[i] == b[j]){
                    result.add(a[i]);
                }
            }
        }


        return result;
    }
}
