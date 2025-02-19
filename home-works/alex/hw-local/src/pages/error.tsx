import { useTranslation } from 'react-i18next';

const Error = () => {
	const { t } = useTranslation();
	return (
			<div>
				{t('404')}
			</div>
	);
};

export default Error;