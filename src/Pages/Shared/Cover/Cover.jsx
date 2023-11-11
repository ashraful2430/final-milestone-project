
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
    return (
        <>
            <Parallax
                blur={{ min: -100, max: 100 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[600px]" >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5 uppercase">{description}</p>

                        </div>
                    </div>
                </div>
            </Parallax>

        </>
    );
};

Cover.propTypes = {
    img: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string
};

export default Cover;