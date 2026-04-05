public class MainApp {
    public static void main(String[] args) throws Exception {

        StudentCRUD.insert(1, "Vamshi", 20);
        StudentCRUD.insert(2, "Krishna", 21);

        StudentCRUD.read();

        StudentCRUD.update(1, 22);
        StudentCRUD.delete(2);

        StudentCRUD.read();
    }
}
