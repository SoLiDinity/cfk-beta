import API_ENDPOPINTS from "../global/api-endpoints";
import OPTIONS from "../global/fetch-options";
import Loader from "../utils/loader-performer";

class DataSource {
    static async allDocuments() {
        Loader.performLoader();
        try {
            const response = await fetch(API_ENDPOPINTS.SHOW_ALL_DOCS, OPTIONS);
            const responseJson = await response.json();

            Loader.finishLoader();

            return await responseJson.documents;
        } catch (error) {
            Loader.finishLoader();
            
            return 'gagal'
        }
    }
}

export default DataSource;