package tesztek;

import java.util.Scanner;


public class test {
    public static void main(String[] args) {
        int novy_egy_hazug = 0;
        Thread am = new Thread(new Runnable(){
            @Override
            public void run() {
                System.out.println("Szerintem  is igen");
            }
        });
        am.start();

        Scanner reader = new Scanner(System.in);
        System.out.println("Szerintem is igen");
        novy_egy_hazug =  Integer.parseInt(reader.nextLine());


    }


}