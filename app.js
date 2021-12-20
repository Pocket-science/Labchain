// Labchain js

// var ip="http://test.labchain.nl/blockchain/"  


var labchainApp = angular.module("labchainApp", []);
    labchainApp.controller("labchainCtl", function($scope) {
    $scope.nodeinfo = window.location.host + "  (testnet)";


    var Web3 = require('web3');
    var web3 = new Web3();
    var ip = "http://" + window.location.host +'/blockchain/';
    web3.setProvider(new web3.providers.HttpProvider(ip));
    var account = web3.eth.accounts[0];
    var balance = web3.eth.getBalance(account);
    var blockNumber = web3.eth.blockNumber;
    if (account==='') alert ('Geth not running');

    $scope.account=account;

    $scope.balance=parseInt(balance)/1000000000000000000;
    $scope.balance =$scope.balance.toFixed(2) + ' Ether';

    $scope.blockNumber=blockNumber;


$scope.send_tx= function (datamee) {

    var Web3 = require('web3');
    var web3 = new Web3();		
   var ip = "http://" + window.location.host +'/blockchain/';
    web3.setProvider(new web3.providers.HttpProvider(ip));

    var from = web3.eth.accounts[0];
    var to   = "0x47f8bac1c9e7145a40bb7aa734cb223aace45758";
    var amount = web3.toWei(0.1, "ether");
    var datamee1 = web3.toHex(datamee);
    $scope.tx= (    web3.eth.sendTransaction({from: from, to: to, value: amount, data: datamee1}));
}



$scope.perform_login=function(){

// site icon, optional. at least 48x48px
//var hosticon = 'https://labchain.nl/LabchainLogoBig.png';

// server-side generated and randomized challenges
var challenge_hidden = '';
var challenge_visual = '';

TrezorConnect.requestLogin(hosticon, challenge_hidden, challenge_visual, function (result) {
    if (result.success) {
	$scope.pk=result.public_key;
//	$scope.signature=result.signature;
//	console.log('Public key:', result.public_key); // pubkey in hex
//	console.log('Signature:', result.signature); // signature in hex
//        console.log('Version 2:', result.version === 2); // version field
    } else {
	$scope.pk=result.error;
//	console.error('Error:', result.error);
    }
});




}


  $scope.get_tx = function () {

    var Web3 = require('web3');
    var web3 = new Web3();
//    var ip = "http://" + window.location.host +'/blockchain/';
    web3.setProvider(new web3.providers.HttpProvider(ip));
    var myaccount = web3.eth.accounts[0];

    var endBlockNumber, startBlockNumber;
    $scope.status="Searching";
  if (endBlockNumber == null) {
    endBlockNumber = web3.eth.blockNumber;
  }
  if (startBlockNumber == null) {
    startBlockNumber = endBlockNumber - 100;
  }


  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 100 == 0) {
      $scope.status=("searching block " + i);
    }

 $scope.status=("Finished searching");
    var block = web3.eth.getBlock(i, true);

    if (block != null && block.transactions != null) {
      block.transactions.forEach( function(e) {
        if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
	

	$scope.txhash=e.hash;
	$scope.from=e.from;
	$scope.to=e.to;
	$scope.value=(e.value);
	$scope.timestamp=block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString();
	$scope.input=e.input;
	        

          console.log("  tx hash          : " + e.hash + "\n"
            + "   nonce           : " + e.nonce + "\n"
            + "   blockHash       : " + e.blockHash + "\n"
            + "   blockNumber     : " + e.blockNumber + "\n"
            + "   transactionIndex: " + e.transactionIndex + "\n"
            + "   from            : " + e.from + "\n" 
            + "   to              : " + e.to + "\n"
            + "   value           : " + e.value + "\n"
            + "   time            : " + block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
            + "   gasPrice        : " + e.gasPrice + "\n"
            + "   gas             : " + e.gas + "\n"
            + "   input           : " + e.input);
        }
      })
    } else $scope.status="Nothing found";


  }



    $scope.date = new Date();



$scope.upload=function(){
$(function () {
    $('#fileupload').fileupload({
        dataType: 'json',
        add: function (e, data) {
            data.context = $('<button/>').text('Upload')
                .appendTo(document.body)
                .click(function () {
                    data.context = $('<p/>').text('Uploading...').replaceAll($(this));
        	    $scope.status=data.context;    
		    data.submit();
                });
        },
        done: function (e, data) {
            data.context.text('Upload finished.');
        }
    });
});


}

}

}
);