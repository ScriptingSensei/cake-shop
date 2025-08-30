<?php
// Database connection settings
$host = 'localhost'; // Change this to your database host
$dbname = 'cust_details'; // Change this to your database name
$username = 'root'; // Change this to your database username
$password = ''; // Change this to your database password

// Establish database connection
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Function to insert data into the database
function insertData($name, $phone, $address, $country, $city, $totalQuantity, $totalPrice)
{
    global $pdo;
    $sql = "INSERT INTO checkout (name, phone, address, country, city, total_quantity, total_price) 
            VALUES (:name, :phone, :address, :country, :city, :totalQuantity, :totalPrice)";
    $stmt = $pdo->prepare($sql);
    $success = $stmt->execute(array(
        ':name' => $name,
        ':phone' => $phone,
        ':address' => $address,
        ':country' => $country,
        ':city' => $city,
        ':totalQuantity' => $totalQuantity,
        ':totalPrice' => $totalPrice
    ));

    return $success;
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $country = $_POST['country'];
    $city = $_POST['city'];
    $totalQuantity = $_POST['totalQuantity'];
    $totalPrice = $_POST['totalPrice'];

    // Insert data into the database
    $success = insertData($name, $phone, $address, $country, $city, $totalQuantity, $totalPrice);

    // Provide feedback to the user
    if ($success) {
        // Order placed successfully
        echo "<script>alert('Order placed successfully!');</script>";
        header("Location: payment.html"); // Redirect to payment page
        exit();
    } else {
        // Order failed
        echo "<script>alert('Order processing failed. Please try again later.');</script>";
    }
}
?>
