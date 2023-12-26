<?php 
session_start();
include 'koneksi.php';
$uname=$_POST['uname'];
$pass=$_POST['pass'];
$query=mysqli_query($koneksi, "SELECT * FROM admin WHERE uname='$uname' AND pass='$pass'")or die(mysqli_error());
if(mysqli_num_rows($query)==1){
	$_SESSION['uname']=$uname;
	header("location:admin/index.php");
}else{
	header("location:index.php?pesan=gagal")or die(mysqli_error());
	// mysql_error();
}
// echo $pas;
 ?>