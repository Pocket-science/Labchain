<?php
$t= $_POST['name'];
echo $t;

unlink('/var/www/html/uploads/' .$t); 
?>