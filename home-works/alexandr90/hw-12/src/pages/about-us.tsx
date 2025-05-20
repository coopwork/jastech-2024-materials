import { useTranslation } from 'react-i18next';

const AboutUs = () => {
	const { t } = useTranslation();
	return (
			<div>
				       {t(`pages.about_us.description`)}
			</div>
	);
};

export default AboutUs;