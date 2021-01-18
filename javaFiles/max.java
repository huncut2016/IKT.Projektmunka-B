public class max {
    public static void main(String[] args){
        System.out.println(max(
                new int[] {-1, 0, 2,5,9}
        ));
    }

    public static int max (int[] a){
        int result = a[0];
        for(int i = 1; i < a.length; i++){
            if(a[i] > result){
                result = a[i];
            }
        }

        return result;
    }
}
