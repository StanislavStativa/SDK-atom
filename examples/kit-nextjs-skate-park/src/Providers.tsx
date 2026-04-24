import {
  ComponentPropsCollection,
  ComponentPropsContext,
  Page,
  SitecoreProvider,
} from '@sitecore-content-sdk/nextjs';
import components from '.sitecore/component-map';
import scConfig from 'sitecore.config';
import atoms from 'components/atoms';

const Providers = ({
  children,
  componentProps,
  page,
}: {
  children: React.ReactNode;
  componentProps?: ComponentPropsCollection;
  page: Page;
}) => {
  return (
    <ComponentPropsContext value={componentProps || {}}>
      <SitecoreProvider
        componentMap={components}
        api={scConfig.api}
        page={page}
        loadImportMap={() => import('.sitecore/import-map')}
        atomRegistry={{ atoms }}
      >
        {children}
      </SitecoreProvider>
    </ComponentPropsContext>
  );
};

export default Providers;
