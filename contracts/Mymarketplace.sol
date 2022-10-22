//SPDX-License-identifier: UNLICENSED;

pragma solidity ^0.5.16;

contract MarketPlace {
    string public title;
    uint public booksAdded = 0;
    mapping(uint => Book) public books;


    struct Book{
        uint id;
        string name;
        string author;
        uint price;
        address payable owner;
        bool isPurchased;
    }

    event BookCreated(
        uint id,
        string name,
        string author,
        uint price,
        address payable owner,
        bool isPurchased
    );

    event BookPurchased(
        uint id,
        string name,
        string author,
        uint price,
        address payable owner,
        bool isPurchased
    );

    constructor() public {
        title = "My Book Shop Place";
    }

    function addBook(string memory _name, string memory _author, uint price) public {
        //collect info and add book
        books[booksAdded] = Book(booksAdded, _name, _author, price, msg.sender, false);
        //increment books count
        booksAdded++;
        //event Book added
        emit BookCreated(booksAdded, _name, _author, price, msg.sender, false);
    }

    function purchaseBook(uint _id) public payable {
        Book memory _newPurchased = books[_id];
        //Purchase book
        address payable _seller = _newPurchased.owner;
        //Book now belongs to buyer
        _newPurchased.owner = msg.sender;
        _newPurchased.isPurchased = true;
        //Pay for book
        address(_seller).transfer(msg.value);
        //isRented is true
        emit BookPurchased(booksAdded, _newPurchased.name, _newPurchased.author, _newPurchased.price, msg.sender, true);
        
    }


}