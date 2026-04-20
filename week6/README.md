How to Run and Test Validation
Install the XML Extension (Highly Recommended):

Open VS Code.
Go to the Extensions view (Ctrl+Shift+X).
Search for and install "XML" by Red Hat. This extension provides real-time validation for DTD and XSD.
Open bookstore.xml:

Once the extension is installed, open 

bookstore.xml
.
If everything is correct, there should be no red underlines.
Test DTD Validation:

In bookstore.xml, try deleting the <price> tag from one of the <book> elements.
Effect: You should immediately see a red error underline because 

bookstore.dtd
 defines price as a required element for every book.
Test XSD Validation:

In bookstore.xml, change the year value from <year>2022</year> to something invalid like <year>abcd</year>.
Effect: You should see a red error underline because 

bookstore.xsd
 specifies that year must be of type xs:gYear (a valid year format).
