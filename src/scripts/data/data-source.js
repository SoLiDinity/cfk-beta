import API_ENDPOPINTS from "../global/api-endpoints";
import OPTIONS from "../global/fetch-options";

class DataSource {
    static async allDocuments() {
        try {
            const response = await fetch(API_ENDPOPINTS.SHOW_ALL_DOCS, OPTIONS.method('GET'));
            const responseJson = await response.json();

            return responseJson;
        } catch (error) {
            return 'gagal'
        }
    }
}

export default DataSource;