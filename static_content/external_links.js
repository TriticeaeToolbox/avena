/**
 * EXTERNAL LINK DEFINITIONS
 * Each website that can be used as an external link should be defined here
 * as an object with the follow properties:
 *     name: the name of the external website
 *     prefixes: an array of the accession number prefixes that can be linked to this website
 *     url: a function that accepts the full accession number (ex: PI 1234) and returns 
 *         the URL for the page on the wesbite for the specific accession
 * @type {Object[]}
 */
const T3_EXTERNAL_LINKS = [
    {
        name: "GRIN",
        prefixes: ["PI", "CIav"],
        url: function(term) {
            return "https://npgsweb.ars-grin.gov/gringlobal/accessiondetail.aspx?accid=" + term;
        }
    },
    {
        name: "GRIN-CA",
        prefixes: ["CIav", "CN", "PGR"],
        url: function(term) {
            return "https://pgrc3.agr.gc.ca/cgi-bin/npgs/html/acc_search.pl?accid=" + term
        }
    }
]