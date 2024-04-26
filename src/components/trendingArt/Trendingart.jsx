import '../trendingArt/Trendingart.css';
import { motion} from "framer-motion";

export default function TrendingArt(){


    return <motion.div className="TrendingArt" 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{delay: 1.5, duration: 1.5 }}
                >
                <h5>
                    Trending Artworks
                </h5>
    </motion.div>
}