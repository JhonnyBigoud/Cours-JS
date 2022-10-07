function MyClosure()
{
    let ref1 = 42;
    let ref2 = "Arthur";
    
    function MySecondClosure()
    {
        console.log(ref2);
    }

    MySecondClosure();
}

MyClosure();

