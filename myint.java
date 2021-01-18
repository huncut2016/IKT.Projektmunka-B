package tesztek;

public class myint {
    int value = 0;
    public myint (int value) {
        this.value = value;
    }
    @Override
    public String toString() {
        return String.valueOf(this.value);
    }
}
