<html lang="en">
<head>
  <meta charset="UTF-8">  
  <title>JS Memory Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
    <h1>Memory</h1>
    <script src="./script.js"></script>
    <?php 
    $cards = array("cactus", "peace lily", "jasmine", "lavender");
    foreach($cards as $card){ ?>
        <div class="card">
            <img src="" class="front" alt="<?php echo $card; ?>">
            <img src="" class="back" alt="back">
        </div>

        <?php
    }
    ?>
    
</body>
</html>