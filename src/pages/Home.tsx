import {Info, Layout, SelectLanguage, UploadForm} from "components";

export const Home = () => {
    return (
        <Layout>
            <Info/>
            <UploadForm/>
            <SelectLanguage/>
        </Layout>
    );
};
